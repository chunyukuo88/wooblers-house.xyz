import { render, screen } from '@testing-library/react';
import { ProtectedContent, submissionHandler } from '../ProtectedContent.jsx';
import { uploadPhotoToS3 } from '../utils/uploadToS3';
import { amplifyConfig } from '../../../config';

jest.mock('../utils/uploadToS3');

describe('ProtectedContent.jsx', ()=>{
  describe('ProtectedContent()', ()=>{
    it('The content loads properly.', ()=>{
      render(<ProtectedContent/>);
      const loggedInSection = screen.getByTestId('logged-in-section');

      expect(loggedInSection).toBeInTheDocument();
    });
  });
  describe('submissionHandler()', ()=>{
    let file = {};
    beforeEach(() => {
      jest.clearAllMocks();
    });
    describe('WHEN: Given a file that is too big', ()=>{
      it('THEN: The function alerts the user and returns nothing.', async ()=>{
        const spy = jest.spyOn(window, 'alert').mockImplementation(() => {});
        const errorMsg = `Please pick a file smaller than ${amplifyConfig.MAX_ATTACHMENT_SIZE/1_000_000} MB.`;
        file.size = 5_000_001;
        file.type = 'image/jpeg';

        const result = await submissionHandler(file);

        expect(spy).toHaveBeenCalledWith(errorMsg);
        expect(result).toBeUndefined();
      });
    });
    describe('WHEN: Given a valid file', ()=>{
      it('THEN: The function uploads to S3 and returns nothing.', async ()=>{
        uploadPhotoToS3.mockImplementation(jest.fn());
        file.size = 1_000;

        await submissionHandler(file);

        expect(uploadPhotoToS3).toHaveBeenCalledWith(file);
      });
    });
    describe('WHEN: Given a file that is within the proper size but is not an image', ()=>{
      it('THEN: The function present the error with an alert.', async ()=>{
        const spy = jest.spyOn(window, 'alert').mockImplementation(() => {});
        const invalidFileMsg = 'Please select a valid JPG file.'
        file = [];

        await submissionHandler(file);

        expect(spy).toHaveBeenCalledWith(invalidFileMsg);
        expect(uploadPhotoToS3).not.toHaveBeenCalledWith(file);
      });
    });
  });
});
