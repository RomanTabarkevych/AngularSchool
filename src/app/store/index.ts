import { State } from './index';
import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import { loginReducer, State as LoginState } from './login/login.reducer';
import { errorReducer, State as ErrorState } from './error/error.reducer';
import { diaryReducer, State as DiaryState } from './diary/diary.reducer';
import { chartReducer, State as ChartState } from './chart/chart.reducer';
import { teachersDataReducer, State as TeachersState } from './teachers/teachers.reducer';
import { subjectsDataReducer, State as SubjectsState } from './subjects/subjects.reducer';


export interface State {
  user: LoginState;
  errors: ErrorState;
  diary: DiaryState;
  teachers: TeachersState;
  chart: ChartState;
  subjects: SubjectsState;
}

export const reducers: ActionReducerMap<State> = {
  user: loginReducer,
  errors: errorReducer,
  diary: diaryReducer,
  teachers: teachersDataReducer,
  chart: chartReducer,
  subjects: subjectsDataReducer};

export const metaReducers: MetaReducer<State>[] = !environment.production
  ? []
  : [];
