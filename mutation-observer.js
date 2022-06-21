//MUTATION OBSERVER
const mutationObserver = new MutationObserver(entries => {
    console.log(entries);
})

const parent = {
    name: 'Diego',
    city: 'London'
}

mutationObserver.observe(parent, {
    atrributes: true
})

parent.name = '';