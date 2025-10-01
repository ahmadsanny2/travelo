import Layout from "components/Layout"
import styles from "./Login.module.css"
import Button from "components/Button"
import Input from "components/Input"

const Login = () => {
    return (
        <Layout noFooter>
            <section className={styles.section}>
                <div className={styles.formWrapper}>
                    <p className="text-heading-3 font-label font-extrabold">Masuk</p>

                    <div className="flex mt-3">
                        <p className="text-heading-5 text-gray-50 font-semibold">Belum punya akun?</p>
                        <a href="#" className="text-heading-5 text-blue-100 font-semibold ml-2 hover:underline">
                            Daftar di sini
                        </a>
                    </div>

                    <form action="" className="flex flex-col mt-8">
                        <Input
                            label="Email"
                            type="email"
                            name="email"
                            placeholder="Masukkan alamat email"
                            className="mb-6"
                        />

                        <Input
                            label="Password"
                            type="password"
                            name="password"
                            placeholder="Masukkan password"
                            className=""
                        />

                        <a href="#" className="text-heading-5 text-blue-100 font-semibold mt-8 mb-4 hover:underline">
                            Lupa password?
                        </a>


                        <Button type="submit" fullWidth>Masuk</Button>
                    </form>

                    <p className="text-heading-5 text-gray-70 my-8 text-center">Atau masuk dengan</p>
                    <Button className="mb-4" variant="google">
                        Masuk dengan Google
                    </Button>
                    <Button variant="facebook">
                        Masuk dengan Facebook
                    </Button>
                </div>
            </section>
        </Layout>
    )
}

export default Login