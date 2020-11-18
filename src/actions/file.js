import { API } from 'aws-amplify';
import { onError } from '../libs/errorLib';
import { s3Upload } from '../libs/awsLib';
import {
  BEGIN_FILE_UPLOAD,
  FILE_UPLOAD_SUCCESS,
  FILE_UPLOAD_FAILURE,
} from './types';

export const fileUpload = ({ file }) => async (dispatch) => {
  try {
    const attachment = file.current ? await s3Upload(file.current) : null;

    // need to make an api request to upload
  } catch (e) {
    onError(e);
  }
};
