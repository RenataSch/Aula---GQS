describe('Teste de navegação e pesquisa por Dress', () => {
  
    beforeEach(() => {
      // Visita a página inicial antes de cada teste
      cy.visit('https://automationexercise.com');
    });
  
    it('Deve clicar no botão Products e pesquisar por Dress', () => {
      // Clica no link "Products"
      cy.contains('a', 'Products').click();
      
      // Verifica se a URL contém "/products"
      cy.url().should('include', '/products');
      
      // Verifica se o título da página de produtos está presente
      cy.get('.title').should('contain', 'Products');
  
      // Digita "Dress" no campo de pesquisa
      cy.get('#search_product').type('Dress');
      
      // Clica no botão de pesquisa
      cy.get('#submit_search').click();
      
      // Verifica se a URL foi alterada para incluir "search"
      cy.url().should('include', 'search');
      
      // Verifica se os resultados da pesquisa contêm a palavra "Dress"
      cy.get('.productinfo').should('contain', 'Dress');
    });
  
  });
