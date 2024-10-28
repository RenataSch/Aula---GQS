describe('Teste de Login no site Automation Exercise', () => {

    beforeEach(() => {
        // Visita a página inicial antes de cada teste
        cy.visit('https://automationexercise.com');
    });

    describe('Login com Sucesso', () => {
        it('Deve acessar a página de Login, inserir email e senha e verificar o botão de logout', () => {
            // Clica no link "Signup / Login"
            cy.contains('a', 'Signup / Login').click();
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
        });
    });

    describe('Login com Credenciais Incorretas', () => {
        it('Deve acessar a página de Login, inserir email e senha e tentar logar', () => {
            // Clica no link "Signup / Login"
            cy.contains('a', 'Signup / Login').click();
            // Verifica se a URL contém "/login"
            cy.url().should('include', '/login');
            // Insere o email no campo de login
            cy.get('input[data-qa="login-email"]').type('teste134@gmail.com');
            // Insere a senha no campo de login
            cy.get('input[data-qa="login-password"]').type('teste123');
            // Clica no botão "Login"
            cy.get('button[data-qa="login-button"]').click();
            // Verifica se o login falhou (assumindo que as credenciais são incorretas)
            cy.get('.login-form').should('contain', 'Your email or password is incorrect!');
        });
    });
});
