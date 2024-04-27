
"use client";

import { Button, Checkbox, Label, Modal, TextInput } from "flowbite-react";
import { useState } from "react";

type LoginModalProps = {
    open: boolean;
    onClose: () => void;
    onSubmit: (email: string, password: string, remember: boolean) => void;
}

export default function LoginModal({ open, onClose, onSubmit }: LoginModalProps) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [remember, setRemember] = useState(false);

    function onCloseModal() {
        onClose();
        setEmail('');
    }

    function onSubmitModal(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        onSubmit(email, password, remember);
    }

    return (
        <>
            <Modal show={open} size="md" onClose={onCloseModal} className="bg-slate-700" popup>
                <Modal.Header />
                <Modal.Body>
                    <form className="space-y-6" onSubmit={onSubmitModal}>
                        <h3 className="text-xl font-medium text-gray-900 dark:text-white">Sign in to our platform</h3>
                        <div>
                            <div className="mb-2 block">
                                <Label htmlFor="email" value="Your email" />
                            </div>
                            <TextInput
                                id="email"
                                placeholder="name@company.com"
                                value={email}
                                onChange={(event) => setEmail(event.target.value)}
                                required
                            />
                        </div>
                        <div>
                            <div className="mb-2 block">
                                <Label htmlFor="password" value="Your password" />
                            </div>
                            <TextInput
                                id="password"
                                type="password"
                                value={password}
                                onChange={(event) => setPassword(event.target.value)}
                                required
                            />
                        </div>
                        <div className="flex justify-between">
                            <div className="flex items-center gap-2">
                                <Checkbox id="remember" defaultChecked={remember} onChange={(event) => setRemember(event.target.checked)} />
                                <Label htmlFor="remember">Remember me</Label>
                            </div>
                            <a href="#" className="text-sm text-cyan-700 hover:underline dark:text-cyan-500">
                                Lost Password?
                            </a>
                        </div>
                        <div className="w-full">
                            <Button type="submit">Log in to your account</Button>
                        </div>
                        <div className="flex justify-between text-sm font-medium text-gray-500 dark:text-gray-300">
                            Not registered?&nbsp;
                            <a href="#" className="text-cyan-700 hover:underline dark:text-cyan-500">
                                Create account
                            </a>
                        </div>
                    </form>
                </Modal.Body>
            </Modal>
        </>
    );
}
