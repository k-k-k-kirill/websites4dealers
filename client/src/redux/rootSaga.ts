import { call, all, spawn } from "redux-saga/effects";

export default function* rootSaga() {
  const sagas: any = [];

  yield all(
    sagas.map((saga: any) =>
      spawn(function* () {
        while (true) {
          try {
            yield call(saga);
            break;
          } catch (e) {
            console.error("Error in saga " + saga.name + ": " + e);
          }
        }
      })
    )
  );
}
