import FormInput from "../../utils/FormInput";
import TotalPriceCell from "../../components/Cart/TotalPriceCell"

const Checkout = () => {
  return (
    <main className="bg-stone-200 h-[calc(100dvh-5rem)]">
      <p className="text-center text-2xl font-bold text-slate-950 pt-8">Finalizar Compra</p>
      <form className="grid grid-rows-[max-content_1fr_1fr_1fr_1fr_1fr] grid-cols-3 grid-flow-col gap-4 h-3/4 mt-5 px-8">
        <p className="text-center text-sm font-bold text-slate-950 row-start-1">Seus Dados</p>
        <FormInput 
          fieldType="text" 
          fieldName="Nome" 
          id="name" 
          placeholder="John" 
          required={true}
        />
        <FormInput 
          fieldType="text" 
          fieldName="Sobrenome" 
          id="surname" 
          placeholder="Lira" 
          required={true}
        />
        <FormInput 
          fieldType="email" 
          fieldName="E-mail" 
          id="email" 
          placeholder="johnlira@gmail.com" 
          required={true}
        />
        <FormInput 
          fieldType="tel" 
          fieldName="Telefone" 
          id="phone" 
          placeholder="(xx) 99999-9999"
          required={true}
        />
        
        <p className="text-center text-sm font-bold text-slate-950 row-start-1">Pagamento e Entrega</p>
        <FormInput 
          fieldType="text" 
          fieldName="Número do Cartão" 
          id="credit-card" 
          placeholder="9999 9999 8888 7777"
          required={true}
        />

        <div className="flex justify-center gap-3">
          <FormInput
            fieldType="text"
            fieldName="CVV"
            id="cvv"
            placeholder="123"
            className="w-1/2"
            required={true}
          />
          <FormInput
            fieldType="text"
            fieldName="Data de vencimento"
            id="expiration-date"
            placeholder="01/30"
            className="w-1/2"
            required={true}
          />
        </div>

        <FormInput
          fieldType="text"
          fieldName="CEP"
          id="postal-code"
          placeholder="33333-999"
          required={true}
        />
        <FormInput
          fieldType="text"
          fieldName="Endereço"
          id="address"
          placeholder="Rua Brasil"
          required={true}
        />

        <div className="flex justify-center gap-3">
          <FormInput
            fieldType="text"
            fieldName="Número"
            id="address-number"
            placeholder="12"
            className="w-1/2"
            required={true}
          />

          <FormInput
            fieldType="text"
            fieldName="Complemento"
            id="apt-number"
            placeholder="103"
            className="w-1/2"
            required={true}
          />
        </div>

        <p className="text-center text-sm font-bold text-slate-950 row-start-1">Seus Produtos</p>

        <section className="row-span-4 p-2 bg-neutral-100 rounded-md">
          
        </section>
        <section className="row-span-1 flex flex-col gap-2">
          <TotalPriceCell />
          <button className="bg-slate-950 text-slate-100 rounded-md p-1 hover:bg-slate-800 text-center">Finalizar Compra</button>
        </section>
      </form>
    </main>
  );
}

export default Checkout;