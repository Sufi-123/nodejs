const tableNames = {
  TBL_AUTHORS: 'authors',
  TBL_BOOKS: 'books',
  TBL_EMPLOYEE: 'employee',
  TBL_USER: 'user',
  TBL_SUBJECT: 'subject',
  TBL_DEPARTMENT: 'department'
};

const defaultCols = {
  CREATED_AT: 'created_at',
  UPDATED_AT: 'updated_at'
};

const authorCols = {
  ID: 'id',
  FIRST_NAME: 'first_name',
  LAST_NAME: 'last_name',
  ADDRESS: 'address',
  EMAIL: 'email',
  PHONE_NUMBER: 'phone_number'
};

const bookCols = {
  TITLE: 'title',
  PAGES: 'pages',
  AUTHOR_ID: 'author_id'
};

const employeeCols = {
  NAME: 'name',
  EMAIL: 'email',
  
};

const userCols = {
  NAME: 'name',
  ADDRESS: 'address',
  
};

const subjectCols = {
  NAME: 'name',
  SCORE: 'score',
};

const departmentCols = {
  NAME: 'name',
  DEPT_ID: 'dept_id',
};

module.exports = {
  table_name: tableNames,
  default_column: defaultCols,
  author_column: authorCols,
  book_column: bookCols,
  employee_column: employeeCols,
  user_column: userCols,
  subject_column: subjectCols,
  department_column: departmentCols
};
