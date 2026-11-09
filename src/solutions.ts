const multiplyValue = (value: number, multiplier = 2): number => value * multiplier;

const processInput = (value: string | number | boolean): string | number => {
  if (typeof value === 'string') return value.trim().toLowerCase();

  if (typeof value === 'number') return value * 10;

  if (typeof value === 'boolean' && value) return 'Active';

  return 'Inactive'
};

const formatCoordinate = (
  coordinates: readonly [latitide: number, longitude: number, locationName: string]
): string => {
    const [latitide, longitude, locationName] = coordinates;
    return `Location: ${locationName} (${latitide}, ${longitude})`;
};

const concatenateArrays = <T>(...arrays: T[][]): T[] => arrays.flat();

interface Course {
  title: string;
  students: number;
  isPublished: boolean;
};

const getPopularCourses = (courses: Course[], minStudents: number): Course[] => {
  return courses.filter(course => course.isPublished && course.students >= minStudents);
};

const pluckValues = <T, K extends keyof T> (
  items: T[], 
  key: K
): T[K][] => items.map(item => item[key]);

class Employee {
  constructor(
    protected name: string,
    private _baseSalary: number
  ) {};

  getDetails() {
    return `Employee: ${this.name}, Base Salary: ${this._baseSalary}`;
  };
};

class Manager extends Employee {
  constructor(
    name: string,
    _baseSalary: number,
    private _department: string
  ) {
    super(name, _baseSalary);
  };

  getRoleInfo() {
    return `Manager of ${this._department}: ${this.name}`;
  };
};

const validateAgeAsync = async (age: number): Promise<string> => {
  const promise = new Promise<string>((resolve, reject) => {
    if (age >= 18) {
      setTimeout(() => resolve('Access Granted'), 1000);
    } else {
      reject(new Error('Access Denied: Must be 18 or older'));
    }

  });

  return promise;
};