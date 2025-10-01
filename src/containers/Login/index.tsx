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

                    <form action="" className="flex flex-col gap-5 mt-8">
                        <Input
                            label="Email"
                            type="email"
                            name="email"
                            placeholder="Masukkan alamat email"
                            className=""
                        />

                        <Input
                            label="Password"
                            type="password"
                            name="password"
                            placeholder="Masukkan password"
                            className=""
                        />

                        <a href="#" className="text-heading-5 text-blue-100 font-semibold hover:underline">
                            Lupa password?
                        </a>

                        <Button>Masuk</Button>
                    </form>
                </div>
            </section>
        </Layout>
    )
}

export default Login