export const createProject= (project)=>{
    return (dispatch, getState,{ getFirebase, getFirestore })=>{
        //make a call async to DataBase
        const firestore= getFirestore();
        const profile= getState().firebase.profile;
        const userID= getState().firebase.auth.uid;

        firestore.collection('projects').add({

            title: project.title,
            content: project.content,
            authorFirstName: profile.firstName,
            authorLastName: profile.lastName,
            authorId: userID,
            createdAt: new Date(),
        }).then(
            ()=> {
                dispatch({type:'CREATE_PROJECT', project: project});
            }
        ).catch((err)=>{
            dispatch({type: 'CREATE_PROJECT_ERROR', err:err});
        });
        
    }
}