export const useLocationContext = jest
  .fn()
  .mockReturnValue({
    setLocation: jest.fn(),
    location: "Ho Chi Minh City"
  })
  .mockReturnValueOnce({
    setLocation: jest.fn(),
    location: "Ho Chi Minh City"
  })
  .mockReturnValueOnce({
    setLocation: jest.fn(),
    location: "Fake"
  });
