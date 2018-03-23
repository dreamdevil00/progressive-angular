import {
  reducer,
  AuthState,
  Credential,
  User,
  initialAuthState,
  AuthLoginAction,
  AuthLoginSuccessAction,
  AuthGetRolesSuccessAction,
} from '../../index';
import 'jest';

describe('AuthReducer', () => {

  describe('undefined action', () => {
    it('should return the default state', () => {
      const result = reducer(void 0, {} as any);
      expect(result).toMatchSnapshot();
    });
  });

  describe('wrong login payload', () => {
    it('sould Not authenticate a user', () => {
      const user: Credential = { username: 'username', password: 'password' };
      const expectedResult = initialAuthState;
      const result = reducer(initialAuthState, new AuthLoginAction(user));
      expect(result).toMatchSnapshot();
    });
  });

  describe('LOGIN_SUCCESS', () => {
    it('should set login to true, user to user info', () => {
      const user = { id: 'testId', token: 'testToken'};
      const expectResult = {
        id: 'testId',
        token: 'testToken',
        roles: [],
        login: true,
      };
      const result = reducer(initialAuthState, new AuthLoginSuccessAction(user));
      expect(result).toMatchSnapshot();
    });
  });

  describe('GET_ROLES_SUCCESS', () => {
    it('should  set user roles', () => {
      const user = { roles: ['admin']};
      const expectResult = {
        id: null,
        token: null,
        roles: ['admin'],
        login: false,
      };
      const result = reducer(initialAuthState, new AuthGetRolesSuccessAction(user));
      expect(result).toMatchSnapshot();
    });
  });
});
