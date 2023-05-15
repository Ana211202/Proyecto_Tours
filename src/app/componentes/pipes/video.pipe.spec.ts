import { VideoPipe } from './video.pipe';
import {  DomSanitizer} from '@angular/platform-browser';
describe('VideoPipe', () => {
  it('create an instance', () => {
    const pipe = new VideoPipe();
    expect(pipe).toBeTruthy();
  });
});
