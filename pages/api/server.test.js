import server from './server';

const jsonResponse = [[{"id":1,"exercisename":"Push-ups","description":"An exercise where one lies prone and pushes up with the arms.","lastupdateon":"2022-03-13T01:23:08.551Z","lastupdatedby":"Mika","createdon":"2022-03-13T01:23:08.551Z","createdby":"Mika"}]]

const json = jest.fn();

const res = {
    status: jest.fn(() => ({
        json
    })),
};

jest.mock('pg-promise', () => () => () => ({
    multi: jest.fn(() => Promise.resolve(jsonResponse)),
}));

describe('Server', () => {
    it('returns success when it receives a response', async () => {
        await server('foo', res);
        expect(res.status).toHaveBeenCalledWith(200);
        expect(json).toHaveBeenCalledWith(jsonResponse);
    });
});
