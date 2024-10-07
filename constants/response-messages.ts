export const HTTP_MESSAGES = {
    SUCCESS: {
        OK: "Success",
        LISTED: " Listed successfully.",
        CREATED: " created successfully.",
        UPDATED: " updated successfully.",
        DELETED: " deleted successfully.",
    },
    ERROR: {
        BAD_REQUEST: "Bad request.",
        UNAUTHORIZED: "Unauthorized.",
        FORBIDDEN: "Forbidden.",
        NOT_FOUND: "Not found.",
        CONFLICT: "Conflict.",
        INTERNAL_SERVER_ERROR: "Internal server error.",
        ID_NOT_FOUND: "User not found check the User ID.",
        ORGANISATION_NOT_FOUND: "Organization not found.",
        EMAIL_ALREADY_EXIST: "Email already exists.",
        PASSWAORD_LENGTH: "Password length should not be greater than 12.",
        ORGANISATION_ALREADY_EXIST: "Organisation already exists.",
        ORGANISATION_CODE_ALREADY_EXIST: "Organisation code already exists.",
        ALREADY_EXISTS: "Already exists.",
    },
};

export const ACCOUNT = {
    SUCCESS: {},
    ERROR: {
        ACCOUNT_LOCKED: "Account locked due to multiple incorrect OTP attempts. Please contact the administrator.",
        USER_NOT_FOUND: "User not found.",
        INVALID_DETAILS: "Invalid Details."

    },
}

export const LOGIN = {
    SUCCESS: {
        LOGIN_SUCCESSFUL: "Login successful.",
        GENERATE_NEW_PASSWORD: "We've emailed you a new password to your registered email address. You should receive it shortly."
    },
    ERROR: {
        CREDENTIALS: "'Please provide an Username and password.",
        INVALID_CREDENTIALS: "Invalid email or password.",
        INVALID_EMAIL: "Invalid email, please enter a valid email address.",
        INVAlID_USERNAME: "Credentials which you entered do not match with our records.",
        INVAlID_PASSWORD: "Invalid password.",
        ACCOUNT_LOCKED: "Your account has been locked. Please contact your administrator.",
        ACCOUNT_INACTIVE: "Your account has been deactivated. Please contact your administrator.",
        ACCOUNT_INACTIVE_LOCKED: "Your account is currently locked or deactivated. Please contact your administrator.",
        LOGIN_FAILED: "Login failed.",
        PASSWORD_MISMATCH: "Password mismatching Please try again."
    },
}

export const LOGOUT = {
    SUCCESS: {
        LOGOUT_SUCCESSFUL: "Logout successful.",
    },
    ERROR: {
        CREDENTIALS: "'Please provide an Username and password.",
        LOGOUT_FAILED: "Logout failed.",
    },
}

export const AUTHENTICATION = {
    ERROR: {
        TOKEN_NOT_PROVIDED: "Unauthorized: Token not provided.",
        AUTHENTICATION_ERROR: "Authentication error: Invalid token.",
        TOKEN_EXPIRED: "Token expired. Please log in again.",
    },
}

export const PERMISSION_LEVELS = {
    Sucess: {
        PERMISSION_LEVEL_CREATED: "Permission template created successfully.",
        PERMISSION_LEVEL_UPDATED: "Permission template updated successfully.",
        PERMISSION_LEVEL_LISTED: "Permission Levels listed.",
        PERMISSION_LEVEL_DELETE: "The record has been deleted successfully.",

    },
    Error: {
        DUPLICATE_CHECK: "Template Name already exists.",
    }
}

export const MASTERS = {
    Sucess: {
        FLAGS_CREATED: 'Flags created successfully.',
        VESSEL_TYPES_CREATED: 'Types created successfully.'
    }
}
export const PASSWORD_MANAGEMENT = {
    success: {
        PASSWORD_UPDATED: "Your password has been successfully changed.",
        PROFILE_UPDATED: "Your profile has been updated successfully.",
        PASWWORD_PROFILE_UPDATED: "Your profile and password has been updated successfully.",
    },
    error: {
        PASSWORD_SAME_EXISTING: "New password should not be same as the current one.",
        CURRENT_PASSWORD_WRONG: "Current password you entered does not match our records.",
    },
}
export const CONTACT_MESSAGE = {
    success: {
        REQUEST_SUBMIT: "Your request has been submitted successfully, we will contact you shortly",
    },
}
export const HIRE_MESSAGE = {
    success: {
        REQUEST_SUBMIT_NORMAL: "Your request has been submitted successfully, we will contact you shortly",
        REQUEST_SUBMIT_BULK: "Your request has been submitted successfully, we will contact you shortly",
    },
}

export const USER_MANGEMENT = {
    success: {
        USER_CREATED: 'User Details Saved Successfully.',
        USER_UPDATED: 'User Details Updated Successfully.',
        USER_PRIVILAGE: 'User privillage Updated Successfully.'
    },
    error: {
        USER_ALREADY_EXISTS: 'Email Id Already Exists.',
        USER_CREATION_ERROR: 'Error Occured while creating the user.',
        MOBILE_ALREADY_EXISTS: 'Mobile Number Already Exists.',
        USER_MOBILE_ALREADY_EXISTS: 'Email Id And Mobile Number Already Exists.'
    }
}
export const VESSEL_MANGEMENT = {
    success: {
        VESSEL_CREATED: 'Vessel Details Saved Successfully.',
        VESSEL_DETAILS_RECIVED: 'Successfully recived vessel Details.',
        VESSEL_UPDATED: 'Vessel Details Updated Successfully.',
        VESSEL_IMAGE_DELETED: 'The image has been deleted successfully.',
        VESSEL_DELETED: 'Vessel has been deleted successfully.'
    },
    error: {
        VESSEL_ALREADY_EXISTS: 'VESSEL Already exists.',
        IMO_NUMBER_ALREADY_EXISTS: 'IMO number Already Exists.',
        MMSI_ALREADY_EXISTS: 'MMSI Already Exists.',
        NAME_ALREADY_EXISTS: 'Vessel name Already Exists.',
        VESSEL_CREATION_ERROR: 'Error Occured while creating the VESSEL.',
        MOBILE_ALREADY_EXISTS: 'Mobile Number Already exists.',
        VESSEL_DELETE_ID_NOTPROVIDED: 'Vessel id not provided.',
        VESSEL_DELETE_DEPENDENCY: 'Dependency Exists: Vessel cannot be deleted.',
    }
}

export const MY_PROFILE = {
    success: {
        GET_USER_DETAILS: 'Sucessfully get user details.',
        PROFILE_UPDATE: 'Profile Details updated Successfully.',
        GET_PERMISSIONS: 'Successfully get user permission records.',
        UPDATE_PASSWORD: 'Your password has been successfully changed.',
        UPDATE_PROFILE_IMAGE: 'Profile picture uploaded successfully.',
        DELETE_PROFILE_IMAGE: 'Profile picture deleted successfully.',
    },
    error: {
        INTERNAL_ERROR: 'An error occurred by the my profile.',
        NO_USER_DETAILS: 'No user details found.',
        NOT_UPDATE_PROFILE: 'Profile Details not updated.',
        NO_RECORDS: 'No records found.',
        SAME_PASSWORD: 'New password should not be same as the current one.',
        NOT_MATCH_RECORDS: 'Current password you entered does not match our records.',
        NOT_UPDATE_RECORDS: 'No records updated.',
    }
}

export const OPERATIONS = {
    sucess: {
        FREIGHT_UPDATED: 'Freight details Updated Successfully.'
    },
    failure: {
        NO_RECORD_FOUND: 'No Records Found',

    }
}

export const OPERATIONS_VCIN = {
    sucess: {
        VCIN_CREATE: 'VCIN created successfully.',
        VCIN_UPDATE: 'VCIN Updated successfully.',
        VCIN_GET: 'VCIN records get successfully.',
        DELETE_SUCCESS: "The file has been deleted successfully.",
        VCIN_DELETE: "VCIN record has been deleted successfully.",
        GET_VESSEL: "Getting Vessel Detail successfully.",
        GET_VESSEL_NAMES: "Getting Vessel Names successfully.",
        GET_VOYAGENO: "Getting VoyageNo successfully.",
        DELETE_DATA: "Data deleted successfully.",
        DELETE_SUCCESS_FREIGHT: "The record has been deleted successfully.",
    },
    error: {
        SERVER_ERROR: "Internal Server Error.",
        ERROR_READING: "Error reading file.",
        ERROR_GET_VCIN: "Error creating for get VCIN records.",
        NO_FILE_PATH: "No file path provided.",
        ID_NOT_PROVIDED: "Id not provided.",
        NOT_DELETE: "Records not deleted.",
        CONFLICT: "Dependency Exists: Record cannot be deleted.",
        NOT_FOUND_VESSEL: 'Vessel Detail Not Found.',
        DEPENDENCY_ERROR: 'Dependency error: Unable to delete this data.',
        DATA_NOT_FOUND: 'Data not found.',
    }
}

export const OPERATIONS_VCOUT = {
    sucess: {
        GET_LINKEDVOYAGE: 'Getting LinkedVoyage Names successfully.',
        VCOUT_CREATE: 'VCOUT created successfully.',
        GET_VOYAGENO: "Getting VoyageNo successfully.",
        VCOUT_GET: 'VCOUT records get successfully.',
        VCOUT_UPDATE: 'VCOUT Updated successfully.',
        VCOUT_DELETE: "VCOUT record has been deleted successfully.",
        DELETE_DATA: "Data deleted successfully.",
        DELETE_SUCCESS: "The file has been deleted successfully.",
        DELETE_SUCCESS_FREIGHT: "The record has been deleted successfully.",
    },
    error: {
        SERVER_ERROR: "Internal Server Error.",
        NOT_FOUND_VOYAGE: "Voyage Detail Not Found.",
        ERROR_GET_VCOUT: "Error creating for get VCOUT records.",
        CONFLICT: "Dependency Exists: Record cannot be deleted.",
        DEPENDENCY_ERROR: 'Dependency error: Unable to delete this data.',
        DATA_NOT_FOUND: 'Data not found.',
        ID_NOT_PROVIDED: "Id not provided.",
        NOT_DELETE: "Records not deleted.",
    }
}

export const OPERATIONS_TCIN = {
    sucess: {
        TCIN_CREATE: 'TCIN created successfully.',
        TCIN_UPDATE: 'TCIN Updated successfully.',
        TCIN_GET: 'TCIN records get successfully.',
        DELETE_SUCCESS: "The file has been deleted successfully.",
        DELETE_SUCCESS_HIRE: "The record has been deleted successfully.",
        TCIN_DELETE: "TCIN record has been deleted successfully.",
        GET_VESSEL: "Getting Vessel Detail successfully.",
        GET_VESSEL_NAMES: "Getting Vessel Names successfully.",
        GET_VOYAGENO: "Getting VoyageNo successfully.",
        DELETE_DATA: "Data deleted successfully.",
    },
    error: {
        SERVER_ERROR: "Internal Server Error.",
        ERROR_READING: "Error reading file.",
        ERROR_GET_TCIN: "Error creating for get TCIN records.",
        NO_FILE_PATH: "No file path provided.",
        ID_NOT_PROVIDED: "Id not provided.",
        NOT_DELETE: "Records not deleted.",
        CONFLICT: "Dependency Exists: Record cannot be deleted.",
        NOT_FOUND_VESSEL: 'Vessel Detail Not Found.',
        DEPENDENCY_ERROR: 'Dependency error: Unable to delete this data.',
        DATA_NOT_FOUND: 'Data not found.',
    }
}

export const OPERATIONS_TCOUT = {
    sucess: {
        GET_LINKEDVOYAGE: 'Getting LinkedVoyage Names successfully.',
        TCOUT_CREATE: 'TCOUT created successfully.',
        GET_VOYAGENO: "Getting VoyageNo successfully.",
        TCOUT_GET: 'TCOUT records get successfully.',
        TCOUT_UPDATE: 'TCOUT Updated successfully.',
        TCOUT_DELETE: "TCOUT record has been deleted successfully.",
        DELETE_DATA: "Data deleted successfully.",
        DELETE_SUCCESS: "The file has been deleted successfully.",
        DELETE_SUCCESS_HIRE: "The record has been deleted successfully.",
    },
    error: {
        SERVER_ERROR: "Internal Server Error.",
        NOT_FOUND_VOYAGE: "Voyage Detail Not Found.",
        ERROR_GET_TCOUT: "Error creating for get TCOUT records.",
        CONFLICT: "Dependency Exists: Record cannot be deleted.",
        DEPENDENCY_ERROR: 'Dependency error: Unable to delete this data.',
        DATA_NOT_FOUND: 'Data not found.',
        ID_NOT_PROVIDED: "Id not provided.",
        NOT_DELETE: "Records not deleted.",
    }
}

export const LAYTIME = {
    Sucess: {
        LAYTIME_CREATED: "Laytime created Successfully.",
        LAYTIME_VCOUT_CREATED: "Laytime created Successfully.",
        LAYTIME_UPDATED: "Laytime updated successfully.",
        LAYTIME_VCOUT_UPDATED: "Laytime updated successfully.",
        LAYTIME_LISTED: "Laytime listed.",
        LAYTIME_DELETE: "Laytime has been deleted successfully.",
        LAYTIME_DEDUTION_DELETE: "The record has been deleted successfully.",
        LAYTIME_APPROVED_CREATED: "The laytime has been approved successfully.",
        LAYTIME_DECLINED_CREATED: "The laytime has been declined successfully.",

    },
    Error: {
        DUPLICATE_CHECK: "Laytime record already exists.",
    }
}

export const INVOICE = {
    success: {
        INVOICE_CREATED: "Invoice created successfully.",
        INVOICE_UPDATED: "Invoice updated successfully.",
        INVOICE_DELETE: "Invoice has been deleted successfully.",
        INVOICE_GRID: "Invoice details fetched successfully.",
        INVOICE_DUPLICATE_CHECK: "No Duplicate records."
    },
    error: {
        INVOICE_DUPLICATE_CHECK: "Invoice No already exists.",
        INTERNAL_SERVER_ERROR: "Internal server error.",
    }
}