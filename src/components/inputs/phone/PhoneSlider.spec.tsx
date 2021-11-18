import {mount} from '@cypress/react'
import {PhoneSlider} from './PhoneSlider'

describe('PhoneSlider', () => {
    it('renders the component with a custom label', () => {
        mount(<PhoneSlider label="Hello!" testId="foo"/>)
        cy.get('[data-testid=foo-phoneSlider]').should('exist')
        cy.get('[data-testid=foo-phoneSlider-label]').should('have.text', 'Hello!')
    })

    it('displays formatted phone number when slider value changes', () => {
        mount(<PhoneSlider testId="foo"/>)
        cy.get('[data-testid=foo-phoneSlider-slider]')
            .invoke('val', '8795451123')
            .trigger("input")
        cy.get('[data-testid=foo-phoneSlider-formattedValue]').should('contain.text', '(879) 545-1123')
        cy.get('[data-testid=foo-phoneSlider-increment]').click()
        cy.get('[data-testid=foo-phoneSlider-formattedValue]').should('contain.text', '(879) 545-1124')
        cy.get('[data-testid=foo-phoneSlider-decrement]').click().click()
        cy.get('[data-testid=foo-phoneSlider-formattedValue]').should('contain.text', '(879) 545-1122')
    })

    it('does not allow an input below 100-000-0000', () => {
        mount(<PhoneSlider testId="foo"/>)
        cy.get('[data-testid=foo-phoneSlider-increment]').click()
        cy.get('[data-testid=foo-phoneSlider-formattedValue]').should('contain.text', '(100) 000-0001')
        cy.get('[data-testid=foo-phoneSlider-decrement]').click()
        cy.get('[data-testid=foo-phoneSlider-formattedValue]').should('contain.text', '(100) 000-0000')
        cy.get('[data-testid=foo-phoneSlider-decrement]').click()
        cy.get('[data-testid=foo-phoneSlider-formattedValue]').should('contain.text', '(100) 000-0000')
    })

    it('does not allow an input above 999-999-9999', () => {
        mount(<PhoneSlider testId="foo"/>)
        cy.get('[data-testid=foo-phoneSlider-slider]')
            .invoke('val', '9999999998')
            .trigger("input")
        cy.get('[data-testid=foo-phoneSlider-formattedValue]').should('contain.text', '(999) 999-9998')
        cy.get('[data-testid=foo-phoneSlider-increment]').click()
        cy.get('[data-testid=foo-phoneSlider-formattedValue]').should('contain.text', '(999) 999-9999')
        cy.get('[data-testid=foo-phoneSlider-increment]').click()
        cy.get('[data-testid=foo-phoneSlider-formattedValue]').should('contain.text', '(999) 999-9999')
    })
})
