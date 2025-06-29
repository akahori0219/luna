// @vitest-environment happy-dom
import { describe, test, expect } from 'vitest';
import DiaryIndex from "./index.astro";
import { renderAstroComponent } from "../../test/helpers";
import { articles } from '../../data/articles';

describe("DiaryIndex", () => {
  test("should render all articles", async () => {
    const result = await renderAstroComponent(DiaryIndex);
    
    const links = result.querySelectorAll('a');
    const articlesArray = Object.entries(articles);

    // Check if the number of links matches the number of articles
    expect(links.length).toBe(articlesArray.length);

    // Check each link and title
    articlesArray.forEach(([slug, article], index) => {
      const link = links[index];
      expect(link.getAttribute('href')).toBe(`/diary/${slug}/`);
      expect(link.textContent).toBe(article.title);
    });
  });

  test('should display article metadata', async () => {
    const result = await renderAstroComponent(DiaryIndex);
    
    const articlesArray = Object.values(articles);
    
    const listItems = result.querySelectorAll('li');

    expect(listItems.length).toBe(articlesArray.length);

    listItems.forEach((item, index) => {
      const article = articlesArray[index];
      const tag = item.querySelector('.bg-gray-700');
      const date = item.querySelector('span:last-of-type');
      
      expect(tag?.textContent).toBe(article.tag);
      expect(date?.textContent).toBe(article.date);
    });
  });
}); 