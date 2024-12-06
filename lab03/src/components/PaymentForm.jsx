import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const schema = yup.object({
    edrpou: yup.string().required('ЕДРПОУ є обов’язковим'),
    name: yup.string().required('Назва одержувача є обов’язковою'),
    iban: yup.string().required('Рахунок IBAN є обов’язковим'),
    category: yup.string().required('Категорія платіжу є обов’язковою'),
    amount: yup.number().positive('Сума має бути позитивною').required('Сума є обов’язковою'),
    cardNumber: yup.string().required('Номер картки є обов’язковим'),
    expiryDate: yup.string().required('Термін дії є обов’язковим'),
    cvv: yup.string().required('CVV є обов’язковим'),
}).required();

const PaymentForm = () => {
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    });

    const onSubmit = (data) => {
        console.log('Form Data: ', data);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="payment-form">
            <div>
                <label>ЄДРПОУ або РНКТП</label>
                <input {...register('edrpou')} />
                {errors.edrpou && <p>{errors.edrpou.message}</p>}
            </div>
            <div>
                <label>Назва одержувача</label>
                <input {...register('name')} />
                {errors.name && <p>{errors.name.message}</p>}
            </div>
            <div>
                <label>Рахунок IBAN</label>
                <input {...register('iban')} />
                {errors.iban && <p>{errors.iban.message}</p>}
            </div>
            <div>
                <label>Категорія платіжу</label>
                <select {...register('category')}>
                    <option value="other">Інші платежі</option>
                </select>
                {errors.category && <p>{errors.category.message}</p>}
            </div>
            <div>
                <label>Сума</label>
                <input type="number" {...register('amount')} />
                {errors.amount && <p>{errors.amount.message}</p>}
            </div>
            <div>
                <h2>Дані для оплати карткою</h2>
                <label>Номер картки</label>
                <input {...register('cardNumber')} />
                {errors.cardNumber && <p>{errors.cardNumber.message}</p>}
            </div>
            <div>
                <label>Термін дії</label>
                <input {...register('expiryDate')} />
                {errors.expiryDate && <p>{errors.expiryDate.message}</p>}
            </div>
            <div>
                <label>CVV</label>
                <input {...register('cvv')} />
                {errors.cvv && <p>{errors.cvv.message}</p>}
            </div>
            <button type="submit">Сплатити</button>
        </form>
    );
};

export default PaymentForm;
