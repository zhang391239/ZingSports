

export default function CreateAction(type = "",status = "",message = "",bean = null)
{
    return{
        status:status,
        type:type,
        message:message,
        bean:bean,
    };
}