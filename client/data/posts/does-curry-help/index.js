/**
 * Created by jack on 16-5-5.
 */

import Post from '../../../common/model/Post';

import content from './does-curry-help.md';

const post = new Post({
	name: 'does-curry-help',
	title: '柯里化还好用么？（译）',
	createdTime: '2016-05-18',
	content
});

export default post;
