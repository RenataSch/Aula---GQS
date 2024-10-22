describe('visitar site', () => {
  it('abre o site', () => {
    cy.visit('https://automationexercise.com/product_details/30')
  })
})

describe('Teste de clique no botão Products', () => {
  it('Deve clicar no botão Products', () => {
    // Visita a página inicial
    cy.visit('https://automationexercise.com');
    
    // Seleciona o link baseado no texto "Products" e clica
    cy.contains('a', 'Products').click();

    // Verifica se foi redirecionado corretamente
    cy.url().should('include', '/products');
  });
});

describe('Teste de navegação e pesquisa de produto', () => {
  
  beforeEach(() => {
    // Visita a página inicial antes de cada teste
    cy.visit('https://automationexercise.com');
  });

  it('Deve clicar no botão Products e pesquisar por t-shirt', () => {
    // Clica no link "Products"
    cy.contains('a', 'Products').click();
    
    // Verifica se a URL contém "/products"
    cy.url().should('include', '/products');
    
    // Verifica se o título da página de produtos está presente
    cy.get('.title').should('contain', 'Products');

    // Digita "t-shirt" no campo de pesquisa
    cy.get('#search_product').type('T-Shirts');
    
    // Clica no botão de pesquisa
    cy.get('#submit_search').click();
    
    // Verifica se a URL foi alterada para incluir "search"
    cy.url().should('include', 'search');
    
    // Verifica se os resultados da pesquisa contêm a palavra "t-shirt"
    cy.get('.productinfo').should('contain', 'T-Shirts');
  });

});

describe('Teste de navegação, pesquisa e seleção de produto', () => {
  
  beforeEach(() => {
    // Visita a página inicial antes de cada teste
    cy.visit('https://automationexercise.com');
  });

  it('Deve clicar no botão Products, pesquisar por t-shirt e abrir os detalhes do produto', () => {
    // Clica no link "Products"
    cy.contains('a', 'Products').click();
    
    // Verifica se a URL contém "/products"
    cy.url().should('include', '/products');
    
    // Verifica se o título da página de produtos está presente
    cy.get('.title').should('contain', 'Products');

    // Digita "t-shirt" no campo de pesquisa
    cy.get('#search_product').type('T-Shirts');
    
    // Clica no botão de pesquisa
    cy.get('#submit_search').click();
    
    // Verifica se a URL foi alterada para incluir "search"
    cy.url().should('include', 'search');
    
    // Verifica se os resultados da pesquisa contêm a palavra "t-shirt"
    cy.get('.productinfo').should('contain', 'T-Shirts');

    // Encontra o produto com o link específico e clica no botão "View Product"
    cy.get('a[href="/product_details/30"]').click();
    
    // Verifica se foi redirecionado corretamente para a página do produto
    cy.url().should('include', '/product_details/30');

    // Verifica se o título do produto contém "T-Shirt"
    cy.get('.product-information').should('contain', 'T-Shirts');
  });

});