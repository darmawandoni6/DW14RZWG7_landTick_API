module.exports = (code, message) => {
  try {
    const error = true;
    switch (code) {
      case 400:
        if (message === "ValidationError") {
          return {
            error: error,
            statusCode: 400,
            errorCode: 501,
            message: "Validation data type error",
          };
        } else if (message === "MongooseError") {
          return {
            error: error,
            statusCode: 400,
            errorCode: 502,
            message: "Server error",
          };
        } else if (message === "CastError") {
          return {
            error: error,
            statusCode: 400,
            errorCode: 503,
            message: "Validation data type not match",
          };
        } else if (message === "DisconnectedError") {
          return {
            error: error,
            statusCode: 400,
            errorCode: 504,
            message: "Connection timeout",
          };
        } else if (message === "DivergentArrayError") {
          return {
            error: error,
            statusCode: 400,
            errorCode: 505,
            message: "Save array error",
          };
        } else if (message === "MissingSchemaError") {
          return {
            error: error,
            statusCode: 400,
            errorCode: 506,
            message: "Invalid parameter",
          };
        } else if (message === "DocumentNotFoundError") {
          return {
            error: error,
            statusCode: 400,
            errorCode: 507,
            message: "Data not found",
          };
        } else if (message === "ValidatorError") {
          return {
            error: error,
            statusCode: 400,
            errorCode: 508,
            message: "Validator error",
          };
        } else if (message === "MissingSchemaError") {
          return {
            error: error,
            statusCode: 400,
            errorCode: 509,
            message: "Missing Schema error",
          };
        } else if (message === "ObjectExpectedError") {
          return {
            error: error,
            statusCode: 400,
            errorCode: 510,
            message: "Object Expected error",
          };
        } else if (message === "ObjectParameterError") {
          return {
            error: error,
            statusCode: 400,
            errorCode: 511,
            message: "Object Parameter error",
          };
        } else if (message === "OverwriteModelError") {
          return {
            error: error,
            statusCode: 400,
            errorCode: 512,
            message: "Overwrite model error",
          };
        } else if (message === "ParallelSaveError") {
          return {
            error: error,
            statusCode: 400,
            errorCode: 513,
            message: "Save data error",
          };
        } else if (message === "StrictModeError") {
          return {
            error: error,
            statusCode: 400,
            errorCode: 514,
            message: "Strict mode error",
          };
        } else if (message === "VersionError") {
          return {
            error: error,
            statusCode: 400,
            errorCode: 515,
            message: "Out of version error",
          };
        }
        return {
          error: error,
          statusCode: 400,
          errorCode: code,
          message: message,
        };
      case 101:
        return {
          error: error,
          statusCode: 400,
          errorCode: code,
          message: "Invalid url parameter",
        };
      case 102:
        return {
          error: error,
          statusCode: 400,
          errorCode: code,
          message: "Maximum docs per page is 50",
        };
      case 103:
        return {
          error: error,
          statusCode: 400,
          errorCode: code,
          message: "Image is invalid or upload failed",
        };
      case 104:
        return {
          error: error,
          statusCode: 400,
          errorCode: code,
          message: "Parameter required",
        };
      case 105:
        return {
          error: error,
          statusCode: 400,
          errorCode: code,
          message: "Only ext jpg or jpeg or png is allowed",
        };
      case 106:
        return {
          error: error,
          statusCode: 400,
          errorCode: code,
          message: "Invalid parameter",
        };
      case 107:
        return {
          error: error,
          statusCode: 400,
          errorCode: code,
          message: "Data not found",
        };
      case 201:
        return {
          error: error,
          statusCode: 400,
          errorCode: code,
          message: "User not found, please register",
        };
      case 202:
        return {
          error: error,
          statusCode: 400,
          errorCode: code,
          message: "Authorization token must be provided",
        };
      case 203:
        return {
          error: error,
          statusCode: 400,
          errorCode: code,
          message: "Authorization token is invalid",
        };
      case 401:
        return {
          error: error,
          statusCode: 400,
          errorCode: code,
          message: "Authorization failed",
        };
      case 403:
        return {
          error: error,
          statusCode: 400,
          errorCode: code,
          message: "Forbidden",
        };
      case 404:
        return {
          error: error,
          statusCode: 400,
          errorCode: code,
          message: "Not found",
        };
      case 409:
        return {
          error: error,
          statusCode: 400,
          errorCode: code,
          message: "Conflic",
        };

      case 500:
        if (process.env.SERVERLESS === "YES")
          return {
            error: error,
            statusCode: 500,
            errorCode: code,
            message: "Internal server error",
          };
        if (!process.env.SERVERLESS)
          return {
            error: error,
            statusCode: 500,
            errorCode: code,
            message: message,
          };
        break;
    }
  } catch (error) {
    console.log(error);
  }
};
