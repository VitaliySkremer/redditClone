interface IErrors {
  comment: string
}

export const validate = (values:IErrors) =>{
  const errors: any = {};
  if(values.comment.length<=3){
    errors.comment = 'Введите больше 3-х символов';
  }
  return errors;
}