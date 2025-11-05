@retoOka
Feature: Edicion de Usuario Existente

    @addUserAdmin
    Scenario: Agregar un empleado admin
        Given El usuario está en la página de gestión de usuarios PIM
        When El usuario hace clic en el botón para agregar un empleado
        And El usuario completa el formulario con datos válidos para un empleado
        And Hace clic en el botón "Save"
        Then Vamos a la pagina de admin y buscamos el user creado
        # And Vamos a la pagina de admin y buscamos el user creado
