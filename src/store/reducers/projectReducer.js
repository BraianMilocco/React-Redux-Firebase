const initState={
    projects:[
        {id: '1', title:'Sonic The Hedgehog', content: 'Sonic the Hedgehog' },
        {id: '2', title:'Sonic and Tails', content: 'Sonic the Hedgehog' },
        {id: '3', title:'Sonic and Knuckles', content: 'Sonic the Hedgehog' }
    ]
}

const projectReducer= (state= initState, action)=> {
    switch(action.type){
        case 'CREATE_PROJECT':
            console.log('created project', action.project);
            return state;
        case 'CREATE_PROJECT_ERROR':
            console.log('create project error', action.err);
            return state;
        default:
            return state;
        }
}

export default projectReducer