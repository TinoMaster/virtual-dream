import { Role } from '../models';

export function encodeRole(role: Role): string {
  switch (role) {
    case Role.ADMIN:
      return 'A1B2C3D4';
    case Role.USER:
      return 'U1Y2X3W4';
    case Role.OWNER:
      return 'O8Z7X6W5';
    case Role.EMPLOYEE:
      return 'E9O8N7M6';
    case Role.SUPERADMIN:
      return 'S0K9J8I7';
    default:
      return 'UNKNOWN';
  }
}

export function decodeRole(code: string): Role {
  switch (code) {
    case 'A1B2C3D4':
      return Role.ADMIN;
    case 'U1Y2X3W4':
      return Role.USER;
    case 'O8Z7X6W5':
      return Role.OWNER;
    case 'E9O8N7M6':
      return Role.EMPLOYEE;
    case 'S0K9J8I7':
      return Role.SUPERADMIN;
    default:
      return Role.USER;
  }
}
