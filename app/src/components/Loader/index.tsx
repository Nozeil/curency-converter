import { TEST_IDS } from '@/main.constants';
import './index.style.css';

export function Loader() {
  return (
    <div data-testid={TEST_IDS.LOADER} className="loader__container">
      <div className="loader">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}
