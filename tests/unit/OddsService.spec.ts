import { expect } from 'chai';
import { Roll, SubtractSingleMultiplyPerIndex, SubtractMultiply } from '@/services/OddsService';

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

  it('Returns 12.5/37.5/37.5/12.5 for 3 dice when TN is 4', () => {
    const response = Roll(3, 4);
    expect(response).to.eql([1 / 8, 3 / 8, 3 / 8, 1 / 8]);
  });

  it('Returns 5/6, 1/6 for 1@6+', () => {
    const response = Roll(1, 6)
      .map((r: number) => r.toFixed(6));
    const ex = [5 / 6, 1 / 6]
      .map((r: number) => r.toFixed(6));
    // Testing to 6 decimal places since there's floating point
    // percision errors and 6 decimal places is close enough
    expect(response).to.eql(ex);
  });

  it('Returns 25/36, 10/36, 1/36 for 2@6+', () => {
    const response = Roll(2, 6)
      .map((r: number) => r.toFixed(6));
    const ex = [25 / 36, 10 / 36, 1 / 36]
      .map((r: number) => r.toFixed(6));
    // Testing to 6 decimal places since there's floating point
    // percision errors and 6 decimal places is close enough
    expect(response).to.eql(ex);
  });
});

describe('OddsService.ts SubtractSingleMultiplyPerIndex', () => {
  it('Halves a single hit when there\'s a 50% to subtract a single hit', () => {
    const halfSingleHit = [0.5, 0.5];
    const response = SubtractSingleMultiplyPerIndex(halfSingleHit, 4);
    expect(response).to.eql([0.75, 0.25]);
  });

  it('Multiplies 6+ properly for 4+ on 2d6', () => {
    const original = Roll(2, 4); // [ 0.25, 0.5, 0.25]
    const target = 6; // 1/6
    const response = SubtractSingleMultiplyPerIndex(original, target)
      .map((r: number) => r.toFixed(6));
    const ex = [49 / 144, 70 / 144, 25 / 144]
      .map((r: number) => r.toFixed(6));
    // Testing to 6 decimal places since there's floating point
    // percision errors and 6 decimal places is close enough
    expect(response).to.eql(ex);
  });
});

describe('OddsService.ts SubtractMultiply', () => {
  it('Multiplies properly for r(2, 4) - r(2, 4)', () => {
    const original = Roll(2, 4); // [ 0.25, 0.5, 0.25 ]
    const response = SubtractMultiply(original, original);
    const ex = [11 / 16, 4 / 16, 1 / 16];
    expect(response).to.eql(ex);
  });

  it('Multiplies properly for r(2, 4) - r(1, 6)', () => {
    const original = Roll(2, 4); // [ 0.25, 0.5, 0.25 ]
    const sub = Roll(1, 6); // [ 5/6, 1/6 ]
    const response = SubtractMultiply(original, sub)
      .map((r: number) => r.toFixed(6));
    const ex = [8 / 24, 11 / 24, 5 / 24]
      .map((r: number) => r.toFixed(6));
    // Testing to 6 decimal places since there's floating point
    // percision errors and 6 decimal places is close enough
    expect(response).to.eql(ex);
  });

  it('Multiplies properly for r(1, 6) - r(2, 4)', () => {
    const original = Roll(1, 6); // [ 5/6, 1/6 ]
    const sub = Roll(2, 4); // [ 0.25, 0.5, 0.25 ]
    const response = SubtractMultiply(original, sub)
      .map((r: number) => r.toFixed(6));
    const ex = [23 / 24, 1 / 24]
      .map((r: number) => r.toFixed(6));
    // Testing to 6 decimal places since there's floating point
    // percision errors and 6 decimal places is close enough
    expect(response).to.eql(ex);
  });

});
