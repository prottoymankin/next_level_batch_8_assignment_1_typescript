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