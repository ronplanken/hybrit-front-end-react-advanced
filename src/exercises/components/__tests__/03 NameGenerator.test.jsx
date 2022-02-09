import React from 'react';
import { render } from '@testing-library/react';
import { NameGeneratorWithService } from '../03 NameGeneratorWithService';
import { RandomNameService as mockRandomNameService} from '../../services/06 RandomNameService';

jest.mock('../../services/06 RandomNameService')

test('if clicking the button will show a random name', () => {
  
  render(<NameGeneratorWithService />);
  
  mockRandomNameService.getName.toHaveBeenCalledWith('')
})
