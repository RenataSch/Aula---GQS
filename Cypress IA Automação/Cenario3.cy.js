describe('Teste de checkout login antes', () => {

    beforeEach(() => {
      // Visita a página inicial antes de cada teste
      cy.visit('https://automationexercise.com');
      
      // Realiza o login antes de iniciar o teste
      cy.contains('a', 'Signup / Login').click();
      cy.get('input[data-qa="login-email"]').type('teste1234@gmail.com');
      cy.get('input[data-qa="login-password"]').type('teste123');
      cy.get('button[data-qa="login-button"]').click();
      cy.contains('a', 'Logout').should('be.visible');
    });
  
    it('Deve navegar até Products, adicionar um produto ao carrinho e finalizar o pedido', () => {
      // Clica na aba "Products"
      cy.contains('a', 'Products').click();
  
      // Verifica se a URL contém "/products"
      cy.url().should('include', '/products');
  
      // Expande a categoria "Women"
      cy.contains('a', 'Women').click();
  
      // Seleciona a subcategoria "Dress" em Women
      cy.contains('a', 'Dress').click();
  
      // Verifica se a página da categoria contém "Sleeveless Dress"
      cy.contains('p', 'Sleeveless Dress').should('be.visible');
  
      // Clica no botão "View Product" para abrir a página de detalhes do produto
      cy.contains('a', 'View Product').click();
  
      // Verifica se a URL contém "/product_details/3"
      cy.url().should('include', '/product_details/3');
  
      // Clica no botão "Add to cart" na página de detalhes
      cy.get('button').contains('Add to cart').click();
  
      // Clica no link "View Cart" no pop-up que aparece
      cy.contains('u', 'View Cart').click();
  
      // Verifica se a URL contém "/view_cart"
      cy.url().should('include', '/view_cart');
  
      // Clica no botão "Proceed To Checkout"
      cy.contains('a', 'Proceed To Checkout').click();
  
      // Verifica se a URL contém "/checkout"
      cy.url().should('include', '/checkout');
  
      // Clica no botão "Place Order"
      cy.contains('a', 'Place Order').click();
  
      // Verifica se a URL contém "/payment", confirmando que está na página de pagamento
      cy.url().should('include', '/payment');
    });
  });

  describe('Teste de checkout sem login', () => {

    beforeEach(() => {
        // Visita a página inicial antes de cada teste
        cy.visit('https://automationexercise.com');
    });

    it('Deve navegar até Products, adicionar um produto ao carrinho e tentar finalizar o pedido', () => {
        // Clica na aba "Products"
        cy.contains('a', 'Products').click();
  
        // Verifica se a URL contém "/products"
        cy.url().should('include', '/products');
  
        // Expande a categoria "Women"
        cy.contains('a', 'Women').click();
  
        // Seleciona a subcategoria "Dress" em Women
        cy.contains('a', 'Dress').click();
  
        // Verifica se a página da categoria contém "Sleeveless Dress"
        cy.contains('p', 'Sleeveless Dress').should('be.visible');
  
        // Clica no botão "View Product" para abrir a página de detalhes do produto
        cy.contains('a', 'View Product').click();
  
        // Verifica se a URL contém "/product_details/3"
        cy.url().should('include', '/product_details/3');
  
        // Clica no botão "Add to cart" na página de detalhes
        cy.get('button').contains('Add to cart').click();
  
        // Clica no link "View Cart" no pop-up que aparece
        cy.contains('u', 'View Cart').click();
  
        // Verifica se a URL contém "/view_cart"
        cy.url().should('include', '/view_cart');
  
        // Clica no botão "Proceed To Checkout"
        cy.contains('a', 'Proceed To Checkout').click();
  
        // Verifica se o pop-up com a opção "Register / Login" aparece
        cy.get('.modal-content').should('be.visible'); // Verifica se o pop-up está visível
        cy.contains('u', 'Register / Login').should('be.visible'); // Verifica se a opção "Register / Login" está presente no pop-up
    });
});

describe('Teste de checkout sem login', () => {

    beforeEach(() => {
        // Visita a página inicial antes de cada teste
        cy.visit('https://automationexercise.com');
    });

    it('Deve navegar até Products, adicionar um produto ao carrinho e finalizar o pedido após login', () => {
        // Clica na aba "Products"
        cy.contains('a', 'Products').click();
  
        // Verifica se a URL contém "/products"
        cy.url().should('include', '/products');
  
        // Expande a categoria "Women"
        cy.contains('a', 'Women').click();
  
        // Seleciona a subcategoria "Dress" em Women
        cy.contains('a', 'Dress').click();
  
        // Verifica se a página da categoria contém "Sleeveless Dress"
        cy.contains('p', 'Sleeveless Dress').should('be.visible');
  
        // Clica no botão "View Product" para abrir a página de detalhes do produto
        cy.contains('a', 'View Product').click();
  
        // Verifica se a URL contém "/product_details/3"
        cy.url().should('include', '/product_details/3');
  
        // Clica no botão "Add to cart" na página de detalhes
        cy.get('button').contains('Add to cart').click();
  
        // Clica no link "View Cart" no pop-up que aparece
        cy.contains('u', 'View Cart').click();
  
        // Verifica se a URL contém "/view_cart"
        cy.url().should('include', '/view_cart');
  
        // Clica no botão "Proceed To Checkout"
        cy.contains('a', 'Proceed To Checkout').click();
  
        // Verifica se o pop-up com a opção "Register / Login" aparece
        cy.get('.modal-content').should('be.visible'); // Verifica se o pop-up está visível
        cy.contains('u', 'Register / Login').should('be.visible'); // Verifica se a opção "Register / Login" está presente no pop-up

        // Clica na opção "Register / Login"
        cy.contains('u', 'Register / Login').click();

        // Verifica se a URL contém "/login"
        cy.url().should('include', '/login');

        // Insere o email no campo de login
        cy.get('input[data-qa="login-email"]').type('teste1234@gmail.com');

        // Insere a senha no campo de login
        cy.get('input[data-qa="login-password"]').type('teste123');

        // Clica no botão "Login"
        cy.get('button[data-qa="login-button"]').click();

        // Verifica se o botão de logout está presente, indicando que o login foi bem-sucedido
        cy.contains('a', 'Logout').should('be.visible');

        // Clica no botão "Cart"
        cy.contains('Cart').click(); // Clica no botão "Cart"
  
        // Verifica se a URL contém "/view_cart" após o clique
        cy.url().should('include', '/view_cart');
  
        // Clica no botão "Proceed To Checkout"
        cy.contains('a', 'Proceed To Checkout').click();
  
        // Verifica se a URL contém "/checkout", confirmando que está na página de checkout
        cy.url().should('include', '/checkout');
    });
});
