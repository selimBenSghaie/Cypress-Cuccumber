/// <reference types ="cypress" /> 
import { expect } from 'chai';
import faker from 'faker';

export let titleNoteApi

export class ApiNotes {

    addNoteApi(token) {

        titleNoteApi = 'note ' + faker.lorem.word()

        cy.request({
            methode: 'POST',
            url: '/api/notes',

            headers: {

                'accept': 'application/json',
                'Content-Type': 'application/x-www-form-urlencoded',
                'x-auth-token': token
            },

            body: {

                'category': "Home",
                'title': titleNoteApi,
                'description': faker.lorem.paragraph()

            }
        })
            .then((response) => {

                expect(response.status).to.eq(200)
            })

    }

    
}





