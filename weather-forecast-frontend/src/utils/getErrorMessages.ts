enum ErrorCodes {
  userDeniedGeo = 1,
}

export const getErrorMessage = (errorCode: ErrorCodes) => {
  switch (errorCode) {
    case ErrorCodes.userDeniedGeo: {
      return "Предоставьте веб-сайту доступ к геолокации и перезагрузите страницу";
    }
  }
};
