const Adopform = () => {

    return (
        <>
            <div class="container">
                <div class="py-5 text-center">
                    <img class="d-block mx-auto mb-4" src="/docs/5.3/assets/brand/bootstrap-logo.svg" alt="" width="72" height="57" />
                    <h2>Formulario de adopción</h2>
                    <p class="lead">Completa este formulario de adopción una vez que estés segura o seguro de tu desición. Nuestros animales en adopción han sido rescatados y recuperados de abandono y/o maltrato, la mayoría ha  sufrido mucho antes de estar listos para reintegrarse a un hogar, no queremos que una adopción irresponsable los haga sufrir nuevamente, es por ello que hemos diseñado este formulario, desde ya agradecemos su confianza y sinceridad para llenarlo junto a su familia.
                        La información entregada en este formulario es de carácter privada entre el postulante y fundación.
                    </p>
                    <p class="lead"><strong>IMPORTANTE</strong> Si su postulación es aprobada se le contactará, la entrega se realizará previa coordinación con el postulante. Si su solicitud no fue  aprobada, se podrán en contacto con usted.</p>
                </div>

                <div class="row g-5">
                    <div class="col-md-5 col-lg-4 order-md-last">
                        <h4 class="d-flex justify-content-between align-items-center mb-3">
                            <span class="text-primary">Your cart</span>
                            <span class="badge bg-primary rounded-pill">3</span>
                        </h4>
                        <ul class="list-group mb-3">
                            <li class="list-group-item d-flex justify-content-between lh-sm">
                                <div>
                                    <h6 class="my-0">Product name</h6>
                                    <small class="text-body-secondary">Brief description</small>
                                </div>
                                <span class="text-body-secondary">$12</span>
                            </li>
                            <li class="list-group-item d-flex justify-content-between lh-sm">
                                <div>
                                    <h6 class="my-0">Second product</h6>
                                    <small class="text-body-secondary">Brief description</small>
                                </div>
                                <span class="text-body-secondary">$8</span>
                            </li>
                            <li class="list-group-item d-flex justify-content-between lh-sm">
                                <div>
                                    <h6 class="my-0">Third item</h6>
                                    <small class="text-body-secondary">Brief description</small>
                                </div>
                                <span class="text-body-secondary">$5</span>
                            </li>
                            <li class="list-group-item d-flex justify-content-between bg-body-tertiary">
                                <div class="text-success">
                                    <h6 class="my-0">Promo code</h6>
                                    <small>EXAMPLECODE</small>
                                </div>
                                <span class="text-success">−$5</span>
                            </li>
                            <li class="list-group-item d-flex justify-content-between">
                                <span>Total (USD)</span>
                                <strong>$20</strong>
                            </li>
                        </ul>

                        <form class="card p-2">
                            <div class="input-group">
                                <input type="text" class="form-control" placeholder="Promo code" spellcheck="false" data-ms-editor="true" />
                                <button type="submit" class="btn btn-secondary">Redeem</button>
                            </div>
                        </form>
                    </div>

                    <div class="col-md-7 col-lg-8">
                        <h4 class="mb-3">Por favor complete su solicitud acá</h4>
                        <form class="needs-validation" novalidate="">
                            <div class="row g-3">
                                <div class="col-sm-6">
                                    <label for="firstName" class="form-label">Nombre</label>
                                    <input type="text" class="form-control" id="firstName" placeholder="" value="" required="" />
                                    <div class="invalid-feedback">
                                        Valid first name is required.
                                    </div>
                                </div>

                                <div class="col-sm-6">
                                    <label for="lastName" class="form-label">Apellido</label>
                                    <input type="text" class="form-control" id="lastName" placeholder="" value="" required="" />
                                    <div class="invalid-feedback">
                                        Valid last name is required.
                                    </div>
                                </div>

                                <div class="col-12">
                                    <label for="username" class="form-label">Username</label>
                                    <div class="input-group has-validation">
                                        <span class="input-group-text">@</span>
                                        <input type="text" class="form-control" id="username" placeholder="Username" required="" />
                                        <div class="invalid-feedback">
                                            Your username is required.
                                        </div>
                                    </div>
                                </div>

                                <div class="col-12">
                                    <label for="email" class="form-label">E-mail <span class="text-body-secondary">(Requerido)</span></label>
                                    <input type="email" class="form-control" id="email" placeholder="you@example.com" />
                                    <div class="invalid-feedback">
                                        Please enter a valid email address for shipping updates.
                                    </div>
                                </div>

                                <div class="col-12">
                                    <label for="address" class="form-label">Domicilio</label>
                                    <input type="text" class="form-control" id="address" placeholder="1234 Main St" required="" spellcheck="false" data-ms-editor="true" />
                                    <div class="invalid-feedback">
                                        Please enter your shipping address.
                                    </div>
                                </div>

                                <div class="col-12">
                                    <label for="address2" class="form-label">Address 2 <span class="text-body-secondary">(Optional)</span></label>
                                    <input type="text" class="form-control" id="address2" placeholder="Apartment or suite" spellcheck="false" data-ms-editor="true" />
                                </div>

                                <div class="col-md-5">
                                    <label for="country" class="form-label">País</label>
                                    <select class="form-select" id="country" required="">
                                        <option value="">Choose...</option>
                                        <option>Chile</option>
                                    </select>
                                    <div class="invalid-feedback">
                                        Please select a valid country.
                                    </div>
                                </div>

                                <div class="col-md-4">
                                    <label for="state" class="form-label">Región</label>
                                    <select class="form-select" id="state" required="">
                                        <option value="">Choose...</option>
                                        <option>RM</option>
                                    </select>
                                    <div class="invalid-feedback">
                                        Please provide a valid state.
                                    </div>
                                </div>

                                <div class="col-md-3">
                                    <label for="zip" class="form-label">Zip</label>
                                    <input type="text" class="form-control" id="zip" placeholder="" required="" spellcheck="false" data-ms-editor="true" />
                                    <div class="invalid-feedback">
                                        Zip code required.
                                    </div>
                                </div>
                            </div>

                            <div class="my-4">

                                <div class="form-check">
                                    <input type="checkbox" class="form-check-input" id="same-address" />
                                    <label class="form-check-label" for="same-address">Shipping address is the same as my billing address</label>
                                </div>

                                <div class="form-check">
                                    <input type="checkbox" class="form-check-input" id="save-info" />
                                    <label class="form-check-label" for="save-info">Save this information for next time</label>
                                </div>

                                <div class="my-4">

                                    <h4 class="mb-3">Payment</h4>

                                    <div class="my-3">
                                        <div class="form-check">
                                            <input id="credit" name="paymentMethod" type="radio" class="form-check-input" checked="" required="" />
                                            <label class="form-check-label" for="credit">Credit card</label>
                                        </div>
                                        <div class="form-check">
                                            <input id="debit" name="paymentMethod" type="radio" class="form-check-input" required="" />
                                            <label class="form-check-label" for="debit">Debit card</label>
                                        </div>
                                        <div class="form-check">
                                            <input id="paypal" name="paymentMethod" type="radio" class="form-check-input" required="" />
                                            <label class="form-check-label" for="paypal">PayPal</label>
                                        </div>
                                    </div>

                                    <div class="row gy-3">
                                        <div class="col-md-6">
                                            <label for="cc-name" class="form-label">Name on card</label>
                                            <input type="text" class="form-control" id="cc-name" placeholder="" required="" spellcheck="false" data-ms-editor="true" />
                                            <small class="text-body-secondary">Full name as displayed on card</small>
                                            <div class="invalid-feedback">
                                                Name on card is required
                                            </div>
                                        </div>

                                        <div class="col-md-6">
                                            <label for="cc-number" class="form-label">Credit card number</label>
                                            <input type="text" class="form-control" id="cc-number" placeholder="" required="" spellcheck="false" data-ms-editor="true" />
                                            <div class="invalid-feedback">
                                                Credit card number is required
                                            </div>
                                        </div>

                                        <div class="col-md-3">
                                            <label for="cc-expiration" class="form-label">Expiration</label>
                                            <input type="text" class="form-control" id="cc-expiration" placeholder="" required="" spellcheck="false" data-ms-editor="true" />
                                            <div class="invalid-feedback">
                                                Expiration date required
                                            </div>
                                        </div>

                                        <div class="col-md-3">
                                            <label for="cc-cvv" class="form-label">CVV</label>
                                            <input type="text" class="form-control" id="cc-cvv" placeholder="" required="" spellcheck="false" data-ms-editor="true" />
                                            <div class="invalid-feedback">
                                                Security code required
                                            </div>
                                        </div>
                                    </div>

                                    <form class="my-4">

                                        <button class="w-100 btn btn-primary btn-lg" type="submit">Continue to checkout</button>
                                    </form>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Adopform;