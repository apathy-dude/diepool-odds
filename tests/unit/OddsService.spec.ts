import { expect } from 'chai';
import { Roll } from '@/services/OddsService';

describe('OddsService.ts Roll', () => {
  it('Returns 100% chance of 0 hits on 0 dice', () => {
    const response = Roll(0, 5);
    expect(response).to.eql([1]);
  });

  it('Returns 100% chance of 0 hits when TN is above 6', () => {
    const response = Roll(100, 7);
    expect(response).to.eql([1]);
  });

  it('Returns 100% for the number of dice when TN is 1', () => {
    const response = Roll(4, 1);
    expect(response).to.eql([0, 0, 0, 0, 1]);
  });

  it('Returns 50/50 for a single die with a TN 4', () => {
    const response = Roll(1, 4);
    expect(response).to.eql([.5, .5]);
  });

  it('Returns 25/50/25 for 2 dice when TN is 4', () => {
    const response = Roll(2, 4);
    expect(response).to.eql([.25, .5, .25]);
  });

  /*
  000 = 0
  001 = 1
  010 = 1
  011 = 2
  100 = 1
  101 = 2
  110 = 2
  111 = 3
  0 = 1/8
  1 = 3/8
  2 = 3/8
  3 = 1/8
  */

  it('Returns 12.5/37.5/37.5/12.5 for 3 dice when TN is 4', () => {
    const response = Roll(3, 4);
    expect(response).to.eql([1 / 8, 3 / 8, 3 / 8, 1 / 8]);
  });
});
