import { UserController } from '../adapters/in/api/user.controller';
import { UserService } from '../application/user.service';

describe('UserController', () => {
  let userController: UserController;
  let userService: UserService;

  beforeEach(() => {
    userService = new UserService();
    userController = new UserController();
  });

  describe('Create User', async () => {});
});
