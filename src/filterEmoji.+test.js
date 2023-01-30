describe('filterEmoji function', () => {
    it('filters emoji list correctly', () => {
      const filteredEmojis = filterEmoji('smile', 5);
      expect(filteredEmojis.length).toBe(5);
      filteredEmojis.forEach(emoji => {
        expect(emoji.title.toLowerCase()).toContain('smile');
      });
    });
  });
  