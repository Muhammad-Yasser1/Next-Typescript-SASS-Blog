import axios from 'axios';

const getArticlesRequest = async () => {
	const articles = await axios
		.get('https://react-blog-9f0af.firebaseio.com/articles.json')
		.then((res) => res.data)
		.catch(console.log);
	return articles;
};

export default getArticlesRequest;
