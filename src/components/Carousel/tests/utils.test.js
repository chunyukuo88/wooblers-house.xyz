import { getPhotos } from "../utils";
// import AWS from "aws-sdk-mock";

describe("utils.js", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });
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
