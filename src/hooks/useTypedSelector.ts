import { useSelector } from 'react-redux';
import { RootState } from '../store/reducers';

export const useTypedSelector = useSelector.withTypes<RootState>();
