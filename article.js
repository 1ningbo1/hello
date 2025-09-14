
// 文章详情页逻辑
document.addEventListener('DOMContentLoaded', () => {
    const articleId = new URLSearchParams(location.search).get('id');
    const blogSystem = new BlogSystem();
    const article = blogSystem.articles.find(a => a.id == articleId);
    
    if (article) {
        document.getElementById('article-content').innerHTML = 
            blogSystem.parseMarkdown(article.content);
    }
});
