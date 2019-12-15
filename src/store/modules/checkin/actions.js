export function checkRequest(id) {
  return {
    type: '@checkin/CHECK_REQUEST',
    payload: { id },
  };
}

export function checkSuccess() {
  return {
    type: '@checkin/CHECK_SUCCESS',
  };
}

export function checkFailure() {
  return {
    type: '@checkin/CHECK_FAILURE',
  };
}
