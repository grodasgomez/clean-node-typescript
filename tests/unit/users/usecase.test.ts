import UsersUseCase from "users/usecase";

describe("getUsers", () => {
  it("should return the users", async () => {
    const mockedUsers = [
      {
        id: "1",
        name: "John Doe",
        email: "lala",
        password: "lala",
        created_at: "2021-01-01",
        updated_at: "2021-01-01",
      },
    ];
    const gerUsersParams = {
      limit: 10,
      page: 1,
    };

    const mockUserRepository = {
      getUsers: jest.fn().mockResolvedValue(mockedUsers),
    };
    const usersUseCase = new UsersUseCase(mockUserRepository as any);

    const expectedResult = mockedUsers;

    const result = await usersUseCase.getUsers(gerUsersParams);

    expect(result).toEqual(expectedResult);
  });
  it("should limit the result to 10 and return the first page when limit and page is not provided", async () => {
    const mockedUsers = [
      {
        id: "1",
        name: "John Doe",
        email: "lala",
        password: "lala",
        created_at: "2021-01-01",
        updated_at: "2021-01-01",
      },
    ];
    const getUsersParams = {} as any;

    const mockUserRepository = {
      getUsers: jest.fn().mockResolvedValue(mockedUsers),
    };
    const usersUseCase = new UsersUseCase(mockUserRepository as any);

    const expectedResult = mockedUsers;

    const result = await usersUseCase.getUsers(getUsersParams);

    expect(mockUserRepository.getUsers).toHaveBeenCalledWith({
      limit: 10,
      page: 1,
    });
    expect(result).toEqual(expectedResult);
  });
});
