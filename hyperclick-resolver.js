'use babel';

/* eslint-disable no-unused-vars, consistent-return */

import path from 'path';

export default function customResolver({ basedir, moduleName }) {
  const [prefix, ...rest] = moduleName.split('/');

  if (prefix === '@env') {
    return path.join(__dirname, '/src/environments/', rest.join('/'))
  }

  if (prefix === '@app') {
    return path.join(__dirname, '/src/app/', rest.join('/'))
  }

  if (prefix === '@assets') {
    return path.join(__dirname, '/src/assets/', rest.join('/'))
  }
}
