import React from "react";
import { useForm } from "react-hook-form";
import { Form, FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useUserStore } from "@/store";
import { useNavigate } from "react-router-dom";
import { getPathByRouteId } from "@/utils/routes.utils";
import { ROUTE_IDS } from "@/routes";
import { Link } from "react-router-dom";

function Login() {
    const navigate = useNavigate();
    const { login } = useUserStore();
    const form = useForm({
        defaultValues: {
            identifier: "",
            password: "",
        },
        mode: "onBlur",
    });

    const onSubmit = async (values) => {
        const credentials = {
            identifier: values.identifier,
            password: values.password,
        };

        const res = await login(credentials);
        if (!res.success) {
            console.error(res);
            form.setError("identifier", { message: "Check your email/username" });
            form.setError("password", { message: "Check your password" });
            return;
        }
        navigate(getPathByRouteId(ROUTE_IDS.DASHBOARD), { replace: true });
    };

    return (
        <div className="space-y-6">
            <div className="text-center">
                <h2 className="text-xl font-semibold">Login</h2>
                <p className="text-muted-foreground text-sm">Welcome back to SKYJO</p>
            </div>

            <Form {...form}>
                <form className="space-y-4" onSubmit={form.handleSubmit(onSubmit)}>
                    <FormField
                        control={form.control}
                        name="identifier"
                        rules={{ required: "Email or username is required" }}
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Email or Username</FormLabel>
                                <FormControl>
                                    <Input placeholder="you@example.com or yourname" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="password"
                        rules={{ required: "Password is required" }}
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Password</FormLabel>
                                <FormControl>
                                    <Input type="password" placeholder="••••••••" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <Button type="submit" className="w-full">Sign In</Button>
                </form>
            </Form>

            <div className="text-center text-sm">
                <span className="text-muted-foreground">New here?</span>{" "}
                <Link to="/auth/register" className="text-primary font-medium hover:underline">Create an account</Link>
            </div>
        </div>
    );
}

export default Login;