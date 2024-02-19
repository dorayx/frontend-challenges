export default function (plop) {
    plop.setGenerator('challenge', {
        description: 'Create a new challenge',
        prompts: [
            {
                type: 'input',
                name: 'name',
                message: 'What is your challenge name?',
            },
        ],
        actions: [
            {
                type: 'addMany',
                base: '.plop/challenge/',
                templateFiles: '.plop/challenge/**',
                destination: 'challenges/{{kebabCase name}}',
            },
        ],
    })
}
