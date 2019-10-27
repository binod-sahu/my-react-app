import getChatLog, { mergeChatdataById } from './service';
import { memberMockData, messageMockData } from '../testing/mockdata';
import { getSortedData } from "../util/util";

// This is just a sample test to show you the desired format and fields, feel free to delete it.
const members = memberMockData;
const messages = messageMockData;
const displayData = mergeChatdataById(messages, members);
const firstMessage = displayData[0];

it('returns the correct format', () => {
  return getChatLog().then(([firstMessage]) => {
    expect(typeof firstMessage.messageId).toBe('string');
    expect(typeof firstMessage.userId).toBe('string');
    expect(typeof firstMessage.fullName).toBe('string');
    expect(typeof firstMessage.timestamp).toBe('string');
    expect(typeof firstMessage.email).toBe('string');
    expect(typeof firstMessage.message).toBe('string');
    expect(firstMessage.avatar === null || typeof firstMessage === 'string').toBeTruthy();
  });
});

it("should Merge member and message arrays for display format", () => {
  expect(firstMessage.fullName).toEqual('Martin Bradley');
})

it("Check types", () => {
  expect(typeof firstMessage.userId).toBe('string');
  expect(typeof firstMessage.fullName).toBe('string');
  expect(typeof firstMessage.timestamp).toBe('string');
  expect(typeof firstMessage.email).toBe('string');
  expect(typeof firstMessage.message).toBe('string');
})

it("Data should sort by date", () => {
  const sortData = getSortedData(displayData);
  expect(sortData[0].fullName).toEqual('Martin Bradley');
})
