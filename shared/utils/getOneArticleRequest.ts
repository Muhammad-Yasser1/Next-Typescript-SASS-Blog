import axios from 'axios';

const getOneArticleRequest = async (id: string) => {
	const articles = await axios
		.get(`https://react-blog-9f0af.firebaseio.com/articles/${+id}.json`)
		.then((res) => res.data)
		.catch(console.log);
	return articles;
};

export default getOneArticleRequest;
