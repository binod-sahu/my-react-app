import React from "react";
import {mount} from 'enzyme';
import {ChatMessageList, ChatMessageListItem} from "./chatMessageList";
import {configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { chatMockData } from '../testing/mockdata';

configure({ adapter: new Adapter() });
const list = chatMockData;
const listContainer = mount(<ChatMessageList list={list}/>);
const chatMessages = listContainer.find(ChatMessageListItem);

it("check Chat message list length", () => {
    expect(chatMessages.length).toEqual(2);
})

it("check Default Avatar if Avatar is not available", () => {
    expect(chatMessages.first().find('img').prop('src')).toEqual('default.png');
})

it("Check Avatar Image", () => {
    expect(chatMessages.at(1).find('img').prop('src')).toEqual('http://dummyimage.com/100x100.bmp/cc0000/ffffff');
})