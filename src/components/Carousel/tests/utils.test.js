import { getPhotos } from "../utils";

describe("utils.js", () => {
  describe("getPhotos()", () => {
    describe("WHEN: Invoked,", () => {
      test("THEN: The function returns photos from the S3 bucket.", () => {
        const bucketParams = {};
        const mockData = {};
        const mockedS3 = {
          listObjectsV2: () => ({
            promise: () => mockData,
          }),
        };

        const result = getPhotos(mockedS3, bucketParams);

        expect(result).toEqual(mockData);
      });
    });
  });
});
